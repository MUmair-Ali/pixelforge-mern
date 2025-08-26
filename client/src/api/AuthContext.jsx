/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useReducer, useTransition } from "react";
import { deleteContactData, deleteServiceData, deleteUserData, getContactsCounts, getContactsData, getServices, getServicesCounts, getUserData, getUsersCounts, getUsersData, updateContactData, updateServiceData, updateUserData } from "./Api";
import { toast } from "react-toastify";

const initialState = {
    token: '',
    user: null,
    users: [],
    contacts: [],
    services: [],
    isLoading: true,
    isAuthenticating: false,
    count: null
}

const authReducer = (state, action) => {

    switch(action.type) {

        case "SET_TOKEN":
            return {...state, token: action.payload};

        case "SET_USER":
            return {...state, user: action.payload};

        case "SET_USERS":
            return { ...state, users: action.payload };

        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };

        case "SET_SERVICES":
            return { ...state, services: action.payload };

        case "SET_LOADING":
            return { ...state, isLoading: action.payload };

        case "SET_AUTHENTICATING":
            return { ...state, isAuthenticating: action.payload };

        case "SET_COUNT":
            return { ...state, count: action.payload };

        case "LOGOUT":
            return {...initialState, isLoading: false };

        case "UPDATE_USER":
            return {...state, users: state.users.map(cu => 
                cu._id === action.payload.id ? {...cu, ...action.payload} : cu
            )};
        
        case "UPDATE_CONTACT":
            return {...state, contacts: state.contacts.map(cc =>
                    cc._id === action.payload.id ? { ...cc, ...action.payload.data } : cc
                    ),
                };

        case "UPDATE_SERVICE":
            return {...state, services: state.services.map(cs =>
                cs._id === action.payload.id ? { ...cs, ...action.payload.data } : cs
                ),
            };

        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter((u) => u._id !== action.payload),
            };

        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter((c) => c._id !== action.payload),
            };

        case "DELETE_SERVICE":
            return {
                ...state,
                services: state.services.filter((s) => s._id !== action.payload),
            };

        default: return state;
        
    }

}

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, initialState);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if(savedToken){
            dispatch({ type: "SET_TOKEN", payload: savedToken });
        } else {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    },[])

    const storeToken = useCallback((token) => {
        localStorage.setItem('token', token);
        dispatch({ type: "SET_TOKEN", payload: token });
    }, [])

    const logoutUser = useCallback(() => {
       localStorage.removeItem('token');
       dispatch({type: "LOGOUT"})
    }, [])

    //? JWT auth - to get the currently logged in user data

    const userAuthentication = useCallback(async () => {

        if(!state.token) return;

        dispatch({type: "SET_AUTHENTICATING", payload: true })

        try {
            const response = await getUserData(state.token);
            dispatch({ type: "SET_USER", payload: response.data.user });
        } catch (error) {
             console.error("User authentication failed:", error.message);
            logoutUser();
        } finally {
            dispatch({ type: "SET_AUTHENTICATING", payload: false });
        }
    },[logoutUser, state.token])
    
    //* GET DATA & COUNTS LOGIC

    const getCounts = useCallback(async () => {

        if(!state.token) return

        try {
            const res0 = await getUsersCounts(state.token);
            const res1 = await getContactsCounts(state.token);
            const res2 = await getServicesCounts(state.token);

            dispatch({
                type: "SET_COUNT",
                payload: {
                users: res0.data.totalUsers,
                contacts: res1.data.totalContacts,
                services: res2.data.totalServices,
                },
            })

        } catch (error) {
             console.error("User Counts not found:", error.message);
        }
    }, [state.token])

    const getAdminUsersData = useCallback(async () => {
        if(!state.token) return;

        try {
            const response = await getUsersData(state.token);
            dispatch({ type: "SET_USERS", payload: response.data });
        } catch (error) {
            console.error("User authentication failed:", error.message);
        }
    }, [state.token])

    const getAdminContactsData = useCallback(async () => {
        if (!state.token) return;
        
        try {
            const response = await getContactsData(state.token);
            dispatch({ type: "SET_CONTACTS", payload: response.data.contacts });
        } catch (error) {
            console.error("User authentication failed:", error.message);
        }
    },[state.token])

    // const getServicesData = async () => {

    //    try {
    //         dispatch({ type: "SET_LOADING", payload: true });
    //         const service = await getServices();
    //         dispatch({ type: "SET_SERVICES", payload: service.data });
    //     } catch (error) {
    //         console.error(error);
    //     } finally {
    //         dispatch({ type: "SET_LOADING", payload: false });
    //     }
    // }

    //* USE-EFFECTS LOGIC

    useEffect (() => {
        startTransition (async () => {
        try {
            const service = await getServices();
            dispatch({ type: "SET_SERVICES", payload: service.data });
        } catch (error) {
            alert(error);
        }
        })
    }, [])

    useEffect(() => {
        const initializeAuth = async () => {
            if (state.token) {
                dispatch({ type: "SET_LOADING", payload: true });
                await userAuthentication();
                await getCounts();
                dispatch({ type: "SET_LOADING", payload: false });
            }
        };

        initializeAuth();
    }, [state.token])


    useEffect(() => {
        if (state.user && state.user.isAdmin && state.token) {
            getAdminUsersData();
            getAdminContactsData();
        }
    }, [state.user, state.token]);


    //? UPDATION LOGIC 

    const updateUser = useCallback( async (id, user) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await updateUserData(state.token, id, user);
            dispatch({ type: "UPDATE_USER", payload: { id, data: user } });
            toast.success("Update Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to update user' };
        }
    }, [state.token])

    const updateContact = useCallback( async (id, contact) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await updateContactData(state.token, id, contact);
            dispatch({ type: "UPDATE_CONTACT", payload: { id, data: contact } });
            toast.success("Update Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to update contact' };
        }
    }, [state.token])

    const updateService = useCallback( async (id, service) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await updateServiceData(state.token, id, service);
            dispatch({ type: "UPDATE_SERVICE", payload: { id, data: service } });
            toast.success("Update Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to update service' };
        }
    }, [state.token])


    //! DELETION LOGIC

    const deleteUser = useCallback( async (id) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await deleteUserData(state.token, id);
            dispatch({type:"DELETE_USER", payload: id})
            toast.success("Deletion Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to delete user' };
        }
    }, [state.token])

    const deleteContact = useCallback( async (id) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await deleteContactData(state.token, id);
            dispatch({ type: "DELETE_CONTACT", payload: id });
            toast.success("Deletion Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to delete contact' };
        }
    }, [state.token])

     const deleteService = useCallback( async (id) => {
        if(!state.token || !id) return { success: false, error: 'Invalid parameters' };

        try {

            await deleteServiceData(state.token, id);
            dispatch({ type: "DELETE_SERVICE", payload: id });
            toast.success("Deletion Sucessfull!", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });

        } catch (error) {
            return { success: false, error: error.message || 'Failed to delete contact' };
        }
    },[state.token])


    const contextValues = useMemo ( () => ({
        ...state,
        isPending,
        storeToken,
        logoutUser,
        updateUser,
        updateContact,
        updateService,
        deleteUser,
        deleteContact,
        deleteService
    }), 
    [
        deleteContact,
         deleteService,
          deleteUser, 
          isPending, 
          logoutUser, 
          state, 
          storeToken, 
          updateContact, 
          updateService, 
          updateUser
    ])

    return <AuthContext.Provider value={contextValues}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);

    return authContextValue;
}
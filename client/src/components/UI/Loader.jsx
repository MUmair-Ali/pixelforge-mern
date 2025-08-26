/* eslint-disable no-unused-vars */


const Loader = () => {
  const styles = {
    banterLoader: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '72px',
      height: '72px',
      marginLeft: '-36px',
      marginTop: '-36px',
    },
    banterLoaderBox: {
      float: 'left',
      position: 'relative',
      width: '20px',
      height: '20px',
      marginRight: '6px',
    },
    banterLoaderBoxBefore: {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #9B5DE5, #F15BB5, #FEE440)',
      borderRadius: '2px',
    },
    // Specific positioning for certain boxes
    box1Before: {
      marginLeft: '26px',
    },
    box3Before: {
      marginTop: '52px',
    },
    box4Before: {
      marginLeft: '26px',
    },
    // nth-child(3n) styling
    box3: {
      marginRight: 0,
      marginBottom: '6px',
    },
    box6: {
      marginRight: 0,
      marginBottom: '6px',
    },
    box9: {
      marginRight: 0,
      marginBottom: 0,
    },
  };

  const keyframes = `
    @keyframes moveBox-1 {
      9.0909090909% { transform: translate(-26px, 0); }
      18.1818181818% { transform: translate(0px, 0); }
      27.2727272727% { transform: translate(0px, 0); }
      36.3636363636% { transform: translate(26px, 0); }
      45.4545454545% { transform: translate(26px, 26px); }
      54.5454545455% { transform: translate(26px, 26px); }
      63.6363636364% { transform: translate(26px, 26px); }
      72.7272727273% { transform: translate(26px, 0px); }
      81.8181818182% { transform: translate(0px, 0px); }
      90.9090909091% { transform: translate(-26px, 0px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-2 {
      9.0909090909% { transform: translate(0, 0); }
      18.1818181818% { transform: translate(26px, 0); }
      27.2727272727% { transform: translate(0px, 0); }
      36.3636363636% { transform: translate(26px, 0); }
      45.4545454545% { transform: translate(26px, 26px); }
      54.5454545455% { transform: translate(26px, 26px); }
      63.6363636364% { transform: translate(26px, 26px); }
      72.7272727273% { transform: translate(26px, 26px); }
      81.8181818182% { transform: translate(0px, 26px); }
      90.9090909091% { transform: translate(0px, 26px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-3 {
      9.0909090909% { transform: translate(-26px, 0); }
      18.1818181818% { transform: translate(-26px, 0); }
      27.2727272727% { transform: translate(0px, 0); }
      36.3636363636% { transform: translate(-26px, 0); }
      45.4545454545% { transform: translate(-26px, 0); }
      54.5454545455% { transform: translate(-26px, 0); }
      63.6363636364% { transform: translate(-26px, 0); }
      72.7272727273% { transform: translate(-26px, 0); }
      81.8181818182% { transform: translate(-26px, -26px); }
      90.9090909091% { transform: translate(0px, -26px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-4 {
      9.0909090909% { transform: translate(-26px, 0); }
      18.1818181818% { transform: translate(-26px, 0); }
      27.2727272727% { transform: translate(-26px, -26px); }
      36.3636363636% { transform: translate(0px, -26px); }
      45.4545454545% { transform: translate(0px, 0px); }
      54.5454545455% { transform: translate(0px, -26px); }
      63.6363636364% { transform: translate(0px, -26px); }
      72.7272727273% { transform: translate(0px, -26px); }
      81.8181818182% { transform: translate(-26px, -26px); }
      90.9090909091% { transform: translate(-26px, 0px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-5 {
      9.0909090909% { transform: translate(0, 0); }
      18.1818181818% { transform: translate(0, 0); }
      27.2727272727% { transform: translate(0, 0); }
      36.3636363636% { transform: translate(26px, 0); }
      45.4545454545% { transform: translate(26px, 0); }
      54.5454545455% { transform: translate(26px, 0); }
      63.6363636364% { transform: translate(26px, 0); }
      72.7272727273% { transform: translate(26px, 0); }
      81.8181818182% { transform: translate(26px, -26px); }
      90.9090909091% { transform: translate(0px, -26px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-6 {
      9.0909090909% { transform: translate(0, 0); }
      18.1818181818% { transform: translate(-26px, 0); }
      27.2727272727% { transform: translate(-26px, 0); }
      36.3636363636% { transform: translate(0px, 0); }
      45.4545454545% { transform: translate(0px, 0); }
      54.5454545455% { transform: translate(0px, 0); }
      63.6363636364% { transform: translate(0px, 0); }
      72.7272727273% { transform: translate(0px, 26px); }
      81.8181818182% { transform: translate(-26px, 26px); }
      90.9090909091% { transform: translate(-26px, 0px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-7 {
      9.0909090909% { transform: translate(26px, 0); }
      18.1818181818% { transform: translate(26px, 0); }
      27.2727272727% { transform: translate(26px, 0); }
      36.3636363636% { transform: translate(0px, 0); }
      45.4545454545% { transform: translate(0px, -26px); }
      54.5454545455% { transform: translate(26px, -26px); }
      63.6363636364% { transform: translate(0px, -26px); }
      72.7272727273% { transform: translate(0px, -26px); }
      81.8181818182% { transform: translate(0px, 0px); }
      90.9090909091% { transform: translate(26px, 0px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-8 {
      9.0909090909% { transform: translate(0, 0); }
      18.1818181818% { transform: translate(-26px, 0); }
      27.2727272727% { transform: translate(-26px, -26px); }
      36.3636363636% { transform: translate(0px, -26px); }
      45.4545454545% { transform: translate(0px, -26px); }
      54.5454545455% { transform: translate(0px, -26px); }
      63.6363636364% { transform: translate(0px, -26px); }
      72.7272727273% { transform: translate(0px, -26px); }
      81.8181818182% { transform: translate(26px, -26px); }
      90.9090909091% { transform: translate(26px, 0px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes moveBox-9 {
      9.0909090909% { transform: translate(-26px, 0); }
      18.1818181818% { transform: translate(-26px, 0); }
      27.2727272727% { transform: translate(0px, 0); }
      36.3636363636% { transform: translate(-26px, 0); }
      45.4545454545% { transform: translate(0px, 0); }
      54.5454545455% { transform: translate(0px, 0); }
      63.6363636364% { transform: translate(-26px, 0); }
      72.7272727273% { transform: translate(-26px, 0); }
      81.8181818182% { transform: translate(-52px, 0); }
      90.9090909091% { transform: translate(-26px, 0); }
      100% { transform: translate(0px, 0); }
    }
  `;

  const animationStyles = {
    box1: { animation: 'moveBox-1 4s infinite' },
    box2: { animation: 'moveBox-2 4s infinite' },
    box3: { animation: 'moveBox-3 4s infinite' },
    box4: { animation: 'moveBox-4 4s infinite' },
    box5: { animation: 'moveBox-5 4s infinite' },
    box6: { animation: 'moveBox-6 4s infinite' },
    box7: { animation: 'moveBox-7 4s infinite' },
    box8: { animation: 'moveBox-8 4s infinite' },
    box9: { animation: 'moveBox-9 4s infinite' },
  };

  const BoxComponent = ({ index, children }) => {
    const boxStyle = {
      ...styles.banterLoaderBox,
      ...(index === 3 || index === 6 ? { marginRight: 0, marginBottom: '6px' } : {}),
      ...(index === 9 ? { marginRight: 0, marginBottom: 0 } : {}),
      ...animationStyles[`box${index}`],
    };

    const beforeStyle = {
      ...styles.banterLoaderBoxBefore,
      ...(index === 1 || index === 4 ? styles.box1Before : {}),
      ...(index === 3 ? styles.box3Before : {}),
    };

    return (
      <div style={boxStyle}>
        <div style={beforeStyle}></div>
      </div>
    );
  };

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.banterLoader}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <BoxComponent key={index} index={index} />
        ))}
      </div>
    </>
  );
};

export default Loader;
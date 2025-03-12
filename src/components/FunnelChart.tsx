import  { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./FunnelChart.module.css"; // Ensure you have the styles

const FunnelChart = () => {
  const [progress, setProgress] = useState({
    rawSignals: 0,
    keyObservations: 0,
    opportunities: 0,
    discoveries: 0,
  });

  // Animate numbers using react-spring
  const animatedValues = {
    rawSignals: useSpring({ from: { val: 0 }, to: { val: 53532120 }, config: { duration: 1000 } }),
    keyObservations: useSpring({ from: { val: 0 }, to: { val: 289304 }, config: { duration: 1000 } }),
    opportunities: useSpring({ from: { val: 0 }, to: { val: 48189 }, config: { duration: 1000 } }),
    discoveries: useSpring({ from: { val: 0 }, to: { val: 2532 }, config: { duration: 1000 } }),
  };

  // Ensures animation happens once when component mounts
  useEffect(() => {
    setProgress({
      rawSignals: 100,
      keyObservations: 85,
      opportunities: 65,
      discoveries: 40,
    });
  }, []);

  return (
    <div className={styles.moduleBody}>
      <div className={styles.funnelContainer}>
        <div className={styles.funnelMetric} style={{ top: "10%" }}>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            width:"100%",
          }}>

          <span className={styles.label}>Raw Signals Detected</span>
          <span className={styles.value}>
            <animated.span>
              {animatedValues.rawSignals.val.to((val) => Math.floor(val))}
            </animated.span>
          </span>
          </div>

          <div
            className={styles.bar}
            style={{
              width: `${progress.rawSignals}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          ></div>
        </div>

        <div className={styles.funnelMetric} style={{ top: "35%" }}>
          <div style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              width:"100%",
          }}>


          <span className={styles.label}>Key Observations</span>
          <span className={styles.value}>
            <animated.span>
              {animatedValues.keyObservations.val.to((val) => Math.floor(val))}
            </animated.span>
          </span>
          </div>
          <div
            className={styles.bar}
            style={{
              width: `${progress.keyObservations}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          ></div>
        </div>

        <div className={styles.funnelMetric} style={{ top: "60%" }}>
          <div style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              width:"100%",
          }}>


          <span className={styles.label}>Opportunities Identified</span>
          <span className={styles.value}>
            <animated.span>
              {animatedValues.opportunities.val.to((val) => Math.floor(val))}
            </animated.span>
          </span>
          </div>

          <div
            className={styles.bar}
            style={{
              width: `${progress.opportunities}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          ></div>
        </div>

        <div className={styles.funnelMetric} style={{ top: "85%" }}>
          <div style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              width:"100%",
          }}>

          <span className={styles.label}>Breakthrough Discoveries</span>
          <span className={styles.value}>
            <animated.span>
              {animatedValues.discoveries.val.to((val) => Math.floor(val))}
            </animated.span>
          </span>
          </div>
          <div
            className={styles.bar}
            style={{
              width: `${progress.discoveries}%`,
              transition: "width 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FunnelChart;

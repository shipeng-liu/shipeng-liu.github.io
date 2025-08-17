# Adaptive Locomotion on Mud through Proprioceptive Sensing of Substrate Properties

This project presents a method to estimate mud properties using proprioceptive sensing, enabling a flipper-driven robot to adapt its locomotion through muddy substrates of varying strength.

## Project Overview

Muddy terrains present significant challenges for terrestrial robots, as subtle changes in composition and water content can lead to large variations in substrate strength and force responses, causing the robot to slip or get stuck. This work addresses this challenge through innovative proprioceptive sensing techniques.

## Key Features

- **Proprioceptive Sensing**: Characterizes mud reaction forces through actuator current and position signals
- **Real-time Adaptation**: Enables robots to adapt locomotion strategy based on sensed substrate properties
- **Flipper-driven Design**: Specialized robot design for muddy terrain navigation
- **RFT-based Methodology**: Uses Resistive Force Theory for mud property estimation

## Research Contributions

1. **Static Characterization**: Characterize mud reaction forces through actuator signals using statically mounted robotic flipper
2. **Online Estimation**: Extend method to locomoting robot for real-time mud property estimation
3. **Adaptive Control**: Use estimated mud properties for locomotion strategy adaptation

## Results

- Proprioceptively estimated coefficients match closely with lab-grade load cell measurements
- Successfully avoid locomotion failures in varying substrate conditions
- Enhanced robot mobility in complex, deformable natural environments

## Files Structure

```
adaptivesensinglocomotion/
├── index.html          # Main project webpage
├── README.md           # This file
└── assets/             # Project assets (images, videos)
    ├── motor-transparency.png
    ├── flipper-robot.png
    ├── protocol-flipper-robot.mp4
    ├── validation.png
    ├── validation-curve.png
    ├── control-diagram.png
    ├── demo-video.mp4
    ├── nofail.mp4
    ├── fail.mp4
    ├── bodymoving.mp4
    └── unsupport-validate.png
```

## Authors

- **Shipeng Liu** - Department of Electrical and Computer Engineering, USC
- **Jiaze Tang** - Department of Electrical and Computer Engineering, USC  
- **Siyuan Meng** - Department of Electrical and Computer Engineering, USC
- **Feifei Qian** - Department of Electrical and Computer Engineering, USC (Corresponding Author)

## Contact

For questions about this research, please contact: feifeiqi@usc.edu

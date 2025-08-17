# Adaptation of Flipper-Mud Interactions Enables Effective Terrestrial Locomotion on Muddy Substrates

## Overview

This project investigates the complex interactions between robot flippers and muddy substrates to enable effective terrestrial locomotion on challenging natural terrains. We study how mud properties and robot-mud interaction strategies affect locomotion performance through systematic experiments with a mudskipper-inspired robot.

## Key Contributions

- **Non-monotonic Performance Dependence**: Discovered that robot speed depends non-monotonically on mud water content, with optimal performance at intermediate levels (25%-26%)
- **Failure Mechanism Analysis**: Identified two distinct failure mechanisms at high and low water content conditions
- **Adaptive Strategies**: Developed adaptation strategies that increased robot speed by more than 200%
- **Model Validation**: Created simple models that successfully captured observed robot performance

## Research Focus

### Mud Characterization
- Precisely-controlled ratios of sand, clay, and water
- Systematic variation of water content (15%-35%)
- Measurement of mud reaction forces and properties

### Robot Performance Analysis
- Measurement of robot speed across different mud conditions
- Analysis of step length and displacement patterns
- Identification of failure mechanisms

### Adaptation Strategies
- Development of simple interaction models
- Implementation of adaptive control strategies
- Validation of performance improvements

## Results

### Key Findings
- Robot speed was largest on mud with intermediate water content (25%-26%)
- Performance decreased significantly on higher or lower water content
- Adaptation strategies increased robot speed by more than 200%

### Failure Mechanisms
- **High Water Content**: Reduced mud shear strength led to large slippage and reduced step length
- **Low Water Content**: Increased mud suction force caused appendage entrapment and negative displacement during swing phase

## Impact

This study represents a beginning step to extend robot mobility beyond simple substrates towards a wider range of complex, heterogeneous terrains. The insights gained can inform the design of future robots for challenging natural environments.

## Authors

- **Shipeng Liu** - Department of Electrical and Computer Engineering, University of Southern California
- **Boyuan Huang** - Department of Electrical and Computer Engineering, University of Southern California  
- **Feifei Qian** - Department of Electrical and Computer Engineering, University of Southern California

## Publication

**Conference**: IEEE International Conference on Robotics and Automation (ICRA), 2025

## Contact

For questions or collaboration opportunities, please contact:
- Shipeng Liu: shipengl@usc.edu
- Feifei Qian: feifeiqi@usc.edu

## File Structure

```
projects/flipper-mud-interactions/
├── index.html              # Main project page
├── README.md               # This file
└── assets/                 # Project assets
    ├── motivation.png      # Motivation image
    ├── robotdesign.png     # Robot design image
    ├── mudstuck.mp4        # Robot getting stuck video
    ├── motor-transparency.mp4 # Motor transparency demo
    ├── flipper-robot.mp4   # Flipper robot demo
    ├── protocol.png        # Protocol demonstration
    ├── control-diagram.png # Control diagram
    ├── validation.png      # Validation results
    ├── validation-curve.png # Validation curve
    ├── success.mp4         # Successful locomotion
    ├── failure.mp4         # Failed locomotion
    ├── experiment1.mp4     # High water content experiment
    ├── experiment2.mp4     # Low water content experiment
    ├── experiment-validation.png # Experiment validation
    └── analysis.png        # Performance analysis
```

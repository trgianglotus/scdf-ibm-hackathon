# SCDF x IBM Lifesavers’ Innovation Challenge: Call for Code 2020:

# Who are we 
Team AAJPG We are a group of 5 multidisciplinary undergraduate students who came together to code for good. With personal experience driving our motivation, we aim to improve and provide solutions that make caring for our elderly much simpler.

# Problem
The elderly are often overlooked in our society. Amongst the many home hazards, falling and burns from fires are the leading factors that trigger emergency services. (more)  

# Video Pitch insert video  

# Architecture of Solution 
insert diagrams

# Detailed Description
## AI Recognition
Using Deep Learning, we built 2 models for the following purposes:
1. To detect Stove Fires through images:
   A pre-trained Convolutional Neural Network from IBM Watson was used to train on stove fire images from Cloud Annotations. An IBM        Watson ML instance was used for training, producing a very robust and powerful model that was implemented on the cloud.
2. To detect the occurence of Fall (especially for elderly people) using accelerometer data:
   Accelerometer data is continuosly fed into a Real-time Fall Detection Neural Network Model. We took inspiration from multiple            literature like SmartFall research and built a Neural Network with 3 hidden layers and 500,500 and 2000 neurons respectively. Hence, 
   a robust model with good validation accuracy - 90.38 percent (tested on MobiAct dataset) was built.
# Usage (Getting Started)

# Tech Stack 
### IBM CloudantDB
### IBM Node Red 
### IBM IoT Platform 
### Twillio
### React
### Node.js

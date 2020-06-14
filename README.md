# SCDF x IBM Lifesavers’ Innovation Challenge: Call for Code 2020: 

# Who are we...
**Team AAJPG**
We are a group of 5 multidisciplinary undergraduate students who came together to code for good. With personal experience driving our motivation, we aim to improve and provide solutions that make caring for our elderly much simpler. 

# Problem
The elderly are often overlooked in our society. Understandably, if you have not experienced caring for the elderly, this may not be a prevalent issue in your mind however amongst the many home hazards, falling and burns from fires are the leading injuries in elderly. When these injuries befall those living alone or without any kin, others may not be aware of their injury. That is why timely response is required to maximise their survivability and recovery.     

As a result, **ElderAssist** was born.

# Our Goal

With **ElderAssist**, we aim to use technology to build a smart eco-system, starting from home, that improves elder care and reduces emergency resources through the prevention of hazards. 

# Solution
Singapore has recently been adopting new technology in hopes of building a better society. With efforts from **GovTech** and **Smart Nation Initiatives**, it is evident that Singapore is beginning to accept technology into our environment. That is why we believe **ElderAssist** is the solution.

**ElderAssist** is a packaged solution that comes with durable and easy-to-install sensors that learns user behaviour and is constantly watching for abnormalities. 

All sensors will be wirelessly connected via a wireless module and feedbacks data to a central broker with **Node-Red** installed. As the broker collects real-time sensor data, it stores it onto **CloudantDB**. This data is also pushed to the **AI Model** created in **IBM Cloud** and is constantly running to see if the Care Receiver has fallen. The **AI Model** is also able to identify abnormal usage of equipment through the sensors and will notify Care Givers of such instances.

### Notifications

When an abnormality is observed, a notification is sent to the Care Givers phones via **Whatsapp** with some context, thus providing real-time updates for Care Givers to respond to. 

### Examples

	"Hmm, the tap has been running strangely long..."

	"Oh no, ${name} seems to have fallen! View video feed?"

	"Hmm, the stove is on, but it doesn't seem to be heating anything..."

These prompts are based on the user's day-to-day habits and a threshold is set behind the scenes to cater to all behaviours.

### Integrating Seamlessly
It may sound like a lot to manage, but **ElderAssist** integrates seamlessly with exisiting platforms and technlogies like **Whatsapp** and **Telegram** to minimize extra baggage.

### Other Solutions
Unlike other solutions that target elder care, **ElderAssist** does not require any wearables. We rely on the existing eco-system to detect user behaviour and create a seamless solution.




# Video Pitch
Link to video
https://youtu.be/TvYdQsoYUJA

# Architecture of Solution
![Architecture of Solution](https://cdn.discordapp.com/attachments/715576265347694696/721642182984990770/unknown.png)

# Detailed Description
##  AI Recognition

Using Deep Learning, we built 2 models for the following purposes:

1. To detect Stove Fires through images:

A pre-trained Convolutional Neural Network from IBM Watson was used to train on stove fire images from Cloud Annotations. An IBM Watson ML instance was used for training, producing a very robust and powerful model that was implemented on the cloud.

2. To detect the occurence of Fall (especially for elderly people) using accelerometer data:

Accelerometer data is continuosly fed into a Real-time Fall Detection Neural Network Model. We took inspiration from multiple literature like SmartFall research and built a Neural Network with 3 hidden layers and 500,500 and 2000 neurons respectively. Hence,

a robust model with good validation accuracy - 90.38 percent (tested on MobiAct dataset) was built.
![some image]([https://cdn.discordapp.com/attachments/715576265347694696/721651123500351498/NN.PNG](https://cdn.discordapp.com/attachments/715576265347694696/721651123500351498/NN.PNG))
# Usage (Getting Started)

### Demo Setup

**Fall Detection** relies on realtime data and IBM puts our cloud services to "sleep" when not in use. 

So please email your **phone number** to justingnoh@gmail.com for us to activate the realtime database and to forward notifications to you.

### Installation 

 1. Download the IoT Starter App on an **Android** device here: 
 https://github.com/deveops/iot-starter-for-android/releases/download/2.1.0/iotstarter-v2.1.0.apk
 2. Clone repository
 3. Go to root directory
 4. Run "npm install"
 5. Run "npm start"
 6. Website will be available in Localhost:3000

# Tech Stack


| IBM | Description |
|--|--|
| IBM CloudantDB | Storing sensor data. |
| IBM IoT Platform | Receives device & sensor data. |
| | Acts as a relay of information to Node-Red. |
|IBM Node-Red | Manages device & sensor data. |
|  | Push data into IBM CloudantDB. |

###

| Others | Description |
|--|--|
| Twillio | Used to enable whatsapp notifications to caregivers.|
| React | Used to build basic web components.|
||Registration Page.|
| Node.js | Node SDK. |

---------



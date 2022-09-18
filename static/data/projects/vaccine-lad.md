---
showonindex: false
title: Vaccine Lad
description: A Telegram Bot that performs the cron job of checking the CoWIN API Endpoints for any open vaccine slots. Built during the time of COVID-19 vaccines shortage in Delhi in the hopes of automating the appointment process.
date: June 2021
datestamp: "06.2021"
type: Microproject
documentationAvailable: true
link1: Documentation
link2: Github
url2: https://github.com/KrishGoel/vaccine-lad
slug: vaccine-lad
---
# Vaccine Lad
> Github Repository: [github.com/KrishGoel/vaccine-lad](https://instagram.com/covaid.resources)

> A Telegram Bot that performs the cron job of checking the CoWIN API Endpoints for any open vaccine slots. Built using GitHub Actions and Python.

I drove this code to the point where it was able to send notifications to my Telegram. The leftover code was just plain logic and the result, however satisfying, wouldn't have been worth it. Hence, I abandoned the code (also because I had board exams at the time of this writing, they did get cancelled eventually but this code was a study break thing).

I have still attached all the resources you would need to take it up from here. Feel free to hit me up anytime in case you'd wanna discuss anything about this code.

## Functioning
The idea is to scan through the response JSON obtained from the CoWIN APIs and filter the qualifying entries (in my case, ```min_age_limit``` = 18 and ```available_capacity``` > 5).

However, the issue that arises with this approach is that the CoWIN API returns a response for each district and each day, so anyone going around the whole town (Delhi for me) would have to run 77 searches (11 districts in Delhi x 7 days of the week) each time the Bot runs. This is where the code got boring for me and I left it, however it isn't a big issue and can easily be worked out.

Once the program finds a qualifying entry, it will generate a message including the details of the venue, day, vaccine name, etc, and shoot it over Telegram. Which is again piss easy but demanding. I have already completed the notification segment of the code, you can see it at [notify.py](https://github.com/KrishGoel/vaccine-lad/blob/main/notify.py).

## Resources used
- [CoWIN API explained by Postman](https://documenter.getpostman.com/view/9564387/TzRPip7u)
- [CoWIN APIs on API Setu](https://apisetu.gov.in/public/api/cowin#/Appointment%20Availability%20APIs)
- Postman for testing POST and GET Requests
- [Setting up GitHub Actions with Python](https://docs.github.com/en/actions/guides/building-and-testing-python) For reference, checkout ```.github/workflows/main.yaml```

- Creating a Telegram Bot
    1. Open the Telegram app and search for @BotFather. 
    2. Click on the start button or send “/start”. 
    3. Send “/newbot” message to set up a name and a username. 
    4. After setting-up the name and the username BotFather will give you an API token which is your bot token. 
    5. For the next steps, I slacked out and used [@get_id_bot](https://t.me/get_id_bot) to get a ```CHAT_ID```. A much better method would be to use ```telebot``` and ```telethon``` as suggested in this article [Send a message to Telegram user using Python by GeeksForGeeks](https://www.geeksforgeeks.org/send-message-to-telegram-user-using-python/).

A major shoutout to [@plibither8](https://github.com/plibither8) for helping me along the way and providing references.
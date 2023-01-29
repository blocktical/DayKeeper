# The overview of CapeStone Project

# Idea - Blockchain Based Personal Diary

Steps:
    1. Identify the Writer/Reader
    2. FE - User to write the Diary for the Day
    3. Sign the Diary for the Day and Submit it over the Blockchain
    4. Write a Smart Contract for the Personal Diary
    5. Deploy the smart Contract
    6. Engagements with the SC from FE Application
    7. Reading from the SC
    8. Encrypting/Decrypting the Diary using users public/private key pair
    9. Ask any Question to Your Personal Diary <- Learning Things


    |------------|          |------------|          |----------|
    |     FE     |<-------->|     BE     |<-------->| ChatGPT  |
    |------------|          |____________|          |----------|
           |                        |
           |                        |
    |------------|           |---------|
    | Blockchain |           |    DB   |
    |____________|           |_________|




FE Segement- 
    0. FrontEndApplication                              - My Day Keeper --Done
    1. React Application                                - Done
    2. Write Article                                    - UI Component 
        a. Title for the Day Journey                    -
        b. Content for the Day Journey                  -
        c. Date for the Day <- Automatic Date Picker    -
    3. Read Article                                     -
    4. Personal Friend -> ChatGPT                       -


FE-Header.js
    1. Identify the Problems
        a. Name of the Application on Header NavBar
        b. Pages of the Application
            1. Home Page
            2. About Us Page
            3. Writer Page
            4. Reader Page
            5. ChatBot Page
        3. About Us Page
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container text-start border border-info rounded-3 py-3 px-5 mb-3'>
                <h2 className='text-info'>What is the difference between authorization and authentication?</h2>
                <p className='text-light'><i>Authentication is a process by which it can be known that a user is really the one as he represents himself to be. One time pin, passwords, biometrics etc is used to work through an authentication process. And authorization is a process by which an organization determines what files , data, applications etc, a user will have access to. Authorization is always done after authentication, because first the organization has to identify the user and when identification is done, the user is granted the specific access level</i></p>
            </div>
            <div className='container text-start border border-info rounded-3 py-3 px-5 mb-3'>
                <h2 className='text-info'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-light'><i>I am using firebase to build authentication systems that helps my sites to be more secure and it is really is to do these stuff using firebase. And firebase not only provides email password authentications but also third party authentication like facebook login, github login, google login etc. But firebase is not the only option out there to these things, some of them are Back4app, Parse, Backendless, Kinvey, Pubnub, Kuzzle, Kumulos, GameSparks, Hoodie, Appwrite, NHost, AWS Amplify, Heroku, Deployd etc</i></p>
            </div>
            <div className='container text-start border border-info rounded-3 py-3 px-5 mb-3'>
                <h2 className='text-info'>What other services does firebase provide other than authentication?</h2>
                <p className='text-light'><i>Firebase provides a full package that I can use to develope my mobile or web applications faster with fewer resources and more efficiency. There are many services that firebase provides other than authentication. Such as Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote Config etc. The most widely used services among these are Cloud Messaging, Dynamic Links, Predictions, Google Analytics, and Remote Config.</i></p>
            </div>
        </div>
    );
};

export default Blogs;
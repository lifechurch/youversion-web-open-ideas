# YouVersion Web Open Ideas - Deploying to Netlify

The purpose of this document is to provide instructions for deploying your private fork of the application to Netlify. This will allow an easy demonstration of new or proposed functionality in PR submissions.

<!-- markdownlint-disable MD009 -->

1. First, sign up at <https://www.netlify.com> to create an account, if you don't already have one (Suggest validate using your GitHub account).  
  ![Netlify sign on screen](https://user-images.githubusercontent.com/8637143/38703579-3a82ef26-3e69-11e8-971e-2ad9ed75534d.PNG)

2. Next, select your Git provider (most likely GitHub)  
  ![Git provider selection screen](https://user-images.githubusercontent.com/8637143/38703580-3aa6c81a-3e69-11e8-95e1-0ef7f8f9df22.PNG)

3. Pick your fork (e.g. `userId/youversion-web-open-ideas`)  
  ![Git repository selection screen](https://user-images.githubusercontent.com/8637143/38703581-3ad9a7da-3e69-11e8-8780-3ea590e3ac08.PNG)

4. Configure the build settings (e.g. build command: `npm run build` & publish directory: `/build`) and click "Deploy site"  
  ![Build configuration screen](https://user-images.githubusercontent.com/8637143/38703582-3af0c2f8-3e69-11e8-9771-5dee0b0e3332.PNG)

5. On the next screen select the last deployment to see the build/deployment logs.  
  ![Deployment list](https://user-images.githubusercontent.com/8637143/38703583-3b080896-3e69-11e8-98b3-4d0c3bd36930.PNG)

6. Review the deployment progress in the log. Once complete, you can also preview the site using the link provided.  
  ![Deployment log](https://user-images.githubusercontent.com/8637143/38703574-3a128ef2-3e69-11e8-9ff8-23918273f651.PNG)

7. To change the default generated site name, select "Site settings" from the Overview tab.  
  ![Site overview screen](https://user-images.githubusercontent.com/8637143/38703577-3a54c6c8-3e69-11e8-9dd9-a3102402ca96.PNG)

8. On the Site information panel, click the "Change site name" button  
  ![Site settings screen](https://user-images.githubusercontent.com/8637143/38703575-3a272a60-3e69-11e8-8f1c-032d67f4afb4.PNG)

9. Update the site name. Suggest prepending your user ID to prevent collisions.  
  ![Site name screen](https://user-images.githubusercontent.com/8637143/38703578-3a6999d6-3e69-11e8-99f0-f406d9851c77.PNG)
<!-- markdownlint-enable MD009 -->

The final URL should look something like `https://glasssd-youversion-web-open-ideas.netlify.com`. Please include a reference to your site when submitting a PR to demonstrate your proposed feature or fix.

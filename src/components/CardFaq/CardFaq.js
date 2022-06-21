import React from "react";
import styles from "./cardfaq.module.css";
const CardFaq = () => {
  return (
    <div>
      
      <h1>Faq</h1>
      <div>
        How many team members can I invite?
        <p>
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </p>
      </div>
      <div>
        What is the maximum file upload size?
        <p>
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </p>
      </div>
      <div>
        How do I reset my password?
        <p>
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you.
        </p>
      </div>
      <div>
        Can I cancel my subscription?
        <p>
          Yes! Send us a message and we’ll process your request no questions
          asked.
        </p>
      </div>

      <div>
        Do you provide additional support?
        <p>
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </p>
      </div>
    </div>
  );
};

export default CardFaq;

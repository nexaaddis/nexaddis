import React from "react";
import { Container, Typography, Box } from "@mui/material";

const PrivacyTerms = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: "7rem",
        mb: 5,
        p: 3,
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Privacy Policy and Terms & Conditions
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Last Updated: September 1, 2024
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          At Nexaddis, protecting your privacy is of utmost importance. This Privacy Policy outlines the types of personal information we receive and collect when you use our website or services and how we safeguard your information.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Information We Collect:</strong> We gather personal information such as your name, email address, and contact details when you register on our site, subscribe to our newsletter, or interact with our services. Additionally, we collect data on your usage of our site, including IP addresses, browser types, and pages viewed, which helps us understand user behavior and enhance our offerings.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>How We Use Your Information:</strong> The information we collect is used to deliver, maintain, and improve our services. We may use your data to communicate important updates, respond to inquiries, and offer personalized content. For instance, your contact information may be used to inform you about changes to our services or special promotions relevant to your interests.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Data Security:</strong> We employ advanced security measures to protect your data from unauthorized access and breaches. While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or electronic storage is completely secure. We are committed to continually assessing and improving our security practices to safeguard your data.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Third-Party Services:</strong> Our website may contain links to third-party sites or services that are not operated by Nexaddis. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third parties. We encourage you to review the privacy policies of any third-party sites you visit.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Your Rights:</strong> You have the right to access, correct, or delete your personal information. You may also request to stop receiving marketing communications from us. In Ethiopia, under the Data Protection Law, you have specific rights regarding your data, and we comply with these regulations to ensure your privacy.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our site. Cookies help us understand how users interact with our website and allow us to provide more relevant content. You can set your browser to refuse cookies, but this may limit your ability to use certain features of our site.
        </Typography>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" paragraph>
          These Terms & Conditions ("Terms") govern your use of the Nexaddis website and services. By accessing or using our website, you agree to comply with these Terms.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Use of Website:</strong> You agree to use our website and services only for lawful purposes and in accordance with these Terms. You must not use our site in any way that could damage, disable, overburden, or impair our services or interfere with other users’ enjoyment.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Intellectual Property:</strong> All content, including text, graphics, logos, and software, on our website is owned by Nexaddis and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use of our content is prohibited and may result in legal action.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Limitation of Liability:</strong> Nexaddis will not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our liability is limited to the fullest extent permitted by law, including under Ethiopian regulations.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Governing Law:</strong> These Terms and any disputes arising out of or related to the use of our website will be governed by the laws of Ethiopia. Any legal actions or proceedings must be conducted in the competent courts of Addis Ababa, Ethiopia.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Changes to Terms:</strong> We may modify these Terms from time to time. We will notify you of any significant changes by posting the updated Terms on our website. Your continued use of our services after such changes constitute your acceptance of the revised Terms.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Contact Us:</strong> For any questions or concerns regarding our Privacy Policy or Terms & Conditions, please reach out to us at:
        </Typography>
        <Typography variant="body2">
          - Email: nexaddis@gmail.com
        </Typography>
        <Typography variant="body2">
          - Phone: +251 953 431 572
        </Typography>
        <Typography variant="body2">
          - Address: Addis Ababa, Ethiopia
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyTerms;

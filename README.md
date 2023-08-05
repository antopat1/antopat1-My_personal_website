# antopat1-My_personal_website


*Project Technical Structure

The personal website was built using a combination of technologies, including HTML, CSS, and JavaScript, with the help of the Bootstrap framework for a responsive layout and intuitive navigation. The webpage appears as a modern and well-organized site, designed to present the professional profile and technical skills in an appealing and accessible manner.

*HTML Code Structure / Assets Organization

The HTML code is structured following best practices and utilizes semantic tags for excellent accessibility. The general structure is organized with an HTML tag containing head and body elements. The head section contains meta tags for character encoding and page display information, such as title and viewport. The body section contains the entire visible content of the page, divided into logical sections, each with a unique identifier (id) to facilitate internal navigation. Resources such as CSS files, JavaScript, and images are organized using the "assets" folder. To avoid explicit referencing of the HTML page names in the URL, the pages are saved in folders with the default name "index.html," natively recognized by browsers.

*Bootstrap Layout and Grids

The page layout was created using Bootstrap, a widely used CSS library for building responsive websites on both mobile devices and laptops. The framework allows dividing the page into grids, columns, and rows, making the site aesthetically pleasing and easy to navigate on devices of various sizes. Specifically, the "container-fluid" class was used to adapt the contents to the device's screen width.

*Navigation Bar

The top navigation bar, implemented using Bootstrap's "navbar" class, remains fixed at the top of the page, facilitating user navigation even during scrolling. The navigation bar includes a "hamburger" button that expands into a dropdown menu when accessed from mobile devices. The dropdown menu contains links to different sections of the site, enabling users to easily access specific content.

*Dark/Light Mode & Favicon

An interesting feature of the website is the ability to switch between "DARK" and "LIGHT" viewing modes using a custom switch managed through JavaScript. When the user activates DARK mode, the "dark-theme" class is added to the page body, applying a specific Bootstrap style for the dark mode. To improve the site's SEO, a specific Favicon has been added next to the site title and the Dark/Light transition button.

*Contact Forms and Modal Functionality

Two contact forms have been implemented within the site, each in a separate modal. The first modal appears when the user fills out the contact form in the "Contact Me" section. The second modal is a confirmation feedback that appears when the message is successfully sent. Both modals are created with the help of Bootstrap and JavaScript, providing a more interactive and enjoyable user experience.

*Technical Skills & Computer Skills Sections

In the "About Me" section of the site, technical skills are listed, divided into "Hard Skills" and "Soft Skills," with their styling defined by corresponding classes in the "customRules.css" file. The technical skills are displayed using animated progress bars, highlighting proficiency in different technologies. This visual approach makes it easier for visitors to evaluate the user's level of expertise in each area. The "Computer Skills" section presents representative logos of the technologies in which the user has experience. The logos are displayed within a carousel/slider, showing additional logos through @keyframes animations as the user scrolls through the section. This dynamic and interactive approach effectively showcases a wide range of technical skills in limited space.

*Footer and Contact Information

The page footer contains contact information, including a contact form that allows users to send a message directly from this section using an API provided by the free service "formspree.io" through the "inoltraMessaggioFooter()" function developed in the "customJS.js" file. The footer is structured clearly, enabling users to easily access important information such as the email address and the link to quickly return to the top of the page.

*Additional Aesthetic and Interactive Aspects

To present information/skills attractively, the following features are used:

"Bootstrap Cards": flexible and versatile containers that can hold various types of content, such as text, images, buttons, and more. The cards are presented in a uniform layout to link to GitHub Portfolio repositories and acquired academic titles, making the site organized and easy to read.

"Box Shadow": to create a sense of depth and elevation, the CSS property "box-shadow" is utilized. Shadows are subtly applied to the cards, creating the illusion of objects elevated from the page. The addition of subtle shadows to the cards enhances the design, making it more sophisticated and appealing to users.

"Mouseover Lift Effect": when the user hovers over a card, it slightly lifts using the CSS "transform" property and a hover effect.

*Conclusions

The "Personal Website" project is a professionally designed showcase to highlight technical skills and work experiences. By using modern technologies, HTML/CSS, Bootstrap, and JavaScript, the site is accessible and responsive on various devices, providing users with a pleasant browsing experience. The combination of informative sections, modal functionalities, and an eye-catching design makes the site an effective tool to present the user's personal profile.

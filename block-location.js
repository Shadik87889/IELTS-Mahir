// /**
//  * block-location.js
//  * Checks the user's IP location and blocks access if they are in restricted regions.
//  */

// document.addEventListener("DOMContentLoaded", async () => {
//   try {
//     // Switched to GeoJS to bypass the 403/CORS rate-limiting errors from ipapi
//     const response = await fetch("https://get.geojs.io/v1/ip/country.json");
//     const data = await response.json();

//     // Define the list of country codes you want to block.
//     // US = United States, BD = Bangladesh, CA = Canada, GB = United Kingdom, IN = India
//     const blockedCountries = ["US"];

//     // Check if the country code is in the blocked list
//     // Note: GeoJS uses 'data.country' for the 2-letter ISO code
//     if (blockedCountries.includes(data.country)) {
//       // Define the CSS styles for the blocked screen
//       const blockedStyles = `
//                 body {
//                     margin: 0;
//                     padding: 0;
//                     height: 100vh;
//                     background-color: #041E2D; /* Brand dark color */
//                     color: #e2e8f0;
//                     font-family: 'Outfit', sans-serif;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     text-align: center;
//                     overflow: hidden;
//                 }
//                 .blocked-container {
//                     padding: 40px;
//                     max-width: 600px;
//                 }
//                 .blocked-icon {
//                     font-size: 4rem;
//                     color: #ef4444; /* Red color */
//                     margin-bottom: 20px;
//                 }
//                 .blocked-title {
//                     font-family: 'Anton', sans-serif;
//                     font-size: 2.5rem;
//                     color: #ffffff;
//                     margin-bottom: 10px;
//                     letter-spacing: 1px;
//                 }
//                 .blocked-text {
//                     font-size: 1.1rem;
//                     color: #94a3b8;
//                     line-height: 1.6;
//                 }
//             `;

//       // Overwrite the entire body with the blocked message
//       document.head.insertAdjacentHTML(
//         "beforeend",
//         `<style>${blockedStyles}</style>`,
//       );
//       document.body.innerHTML = `
//                 <div class="blocked-container">
//                     <div class="blocked-icon">
//                         <i class="fas fa-globe-americas"></i>
//                     </div>
//                     <h1 class="blocked-title">REGION RESTRICTED</h1>
//                     <p class="blocked-text">
//                         We apologize, but IELTS Mahir services are currently not available in your region.
//                         Thank you for your interest.
//                     </p>
//                 </div>
//             `;

//       // Optionally, stop further scripts from executing
//       window.stop();
//     }
//   } catch (error) {
//     console.error("Geolocation check failed:", error);
//     // If the API fails, the website loads normally as a fallback so real users aren't accidentally blocked.
//   }
// });

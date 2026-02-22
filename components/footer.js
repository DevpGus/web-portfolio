// class CustomFooter extends HTMLElement {
//   connectedCallback() {
//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.innerHTML = `
//       <style>
//         footer {
//           background: #1f2937;
//           color: white;
//           padding: 3rem 2rem;
//           text-align: center;
//         }
//         .footer-content {
//           max-width: 1200px;
//           margin: 0 auto;
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 2rem;
//           text-align: left;
//         }
//         .footer-section h3 {
//           font-size: 1.25rem;
//           margin-bottom: 1.5rem;
//           color: #e5e7eb;
//         }
//         .footer-section p {
//           color: #9ca3af;
//           line-height: 1.6;
//         }
//         .social-links {
//           display: flex;
//           gap: 1rem;
//           margin-top: 1rem;
//         }
//         .social-links a {
//           color: white;
//           background: #374151;
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: background 0.2s;
//         }
//         .social-links a:hover {
//           background: #4f46e5;
//         }
//         .copyright {
//           margin-top: 3rem;
//           padding-top: 1.5rem;
//           border-top: 1px solid #374151;
//           color: #9ca3af;
//           font-size: 0.875rem;
//         }
//         @media (max-width: 768px) {
//           .footer-content {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }
//           .social-links {
//             justify-content: center;
//           }
//         }
//       </style>
//       <footer>
//         <div class="footer-content">
//           <div class="footer-section">
//             <h3>GRP</h3>
//             <p>"The best way to predict the future is to create it"</p>
//           </div>
//           <div class="footer-section">
//             <h3>Quick Links</h3>
//             <ul style="list-style: none; padding: 0;">
//               <li style="margin-bottom: 0.5rem;"><a href="#home" style="color: #9ca3af; text-decoration: none;">Home</a></li>
//               <li style="margin-bottom: 0.5rem;"><a href="#projects" style="color: #9ca3af; text-decoration: none;">Projects</a></li>
//               <li style="margin-bottom: 0.5rem;"><a href="#education" style="color: #9ca3af; text-decoration: none;">Education</a></li>
//               <li><a href="#contact" style="color: #9ca3af; text-decoration: none;">Contact</a></li>
//             </ul>
//           </div>
//           <div class="footer-section">
//             <h3>Connect</h3>
//             <div class="social-links">
//               <a href="#"><i data-feather="github"></i></a>
//               <a href="#"><i data-feather="linkedin"></i></a>
//               <a href="#"><i data-feather="twitter"></i></a>
//               <a href="#"><i data-feather="mail"></i></a>
//             </div>
//           </div>
//         </div>
//         <div class="copyright">
//           &copy; ${new Date().getFullYear()} Gustavo Rodrigues Pereira. All rights reserved.
//         </div>
//       </footer>
//     `;
//   }
// }
// customElements.define('custom-footer', CustomFooter);
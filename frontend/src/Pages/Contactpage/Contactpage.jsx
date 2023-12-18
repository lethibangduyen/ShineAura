import React from 'react';
import './Contactpage.css';
import NavBar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Logo from '../../Components/Assets/Media/Logo.svg';

const Contactpage = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div class="C-container_1">
                <p class="C-container_title_1">GET IN TOUCH</p>
                <div class="C-sub-container_1">
                <div class="C-column_1">
                    <div class="C-column-title">
                        <p class="C-sub_title">Send us an email</p>
                        <div class="C-child-box-subtitle_1"></div>
                    </div>

                    <div class="C-sub-column_1">
                        <div class="C-sub-column_1_1">
                            <div class="C-sub-column_1_1_1">
                                <div class="C-sub_title_2"><label class="label">Name</label></div>
                                <div><input class="C-textbox--simple" type="text" placeholder="Your name" /></div>
                            </div>
                            <div class="C-sub-column_1_1_1">
                                <div class="C-sub_title_2"><label for="">Phone Number</label></div>
                                <div><input class="C-textbox--simple" type="text" placeholder="Your phone" /></div>
                            </div>
                        </div>

                        <div class="C-sub-column_1_1">
                            <div class="C-sub-column_1_1_1">
                                <div class="C-sub_title_2"><label for="">Email</label></div>
                                <div><input class="C-textbox--simple" type="text" placeholder="Your email" /></div>
                            </div>

                            <div class="C-sub-column_1_1_1">
                                <div class="C-sub_title_2"><label for="">Subject</label></div>
                                <div><input class="C-textbox--simple" type="text" placeholder="Input text" /></div>
                            </div>
                        </div>

                        <div>
                            <div class="C-sub-column_1_1_1">
                                <div class="C-sub_title_2"><label>Message</label></div>
                                <div><input class="C-textbox--big" type="text" placeholder="Message" /></div>
                            </div>
                        </div>
                        <div class="C-buton_submit">
                            <button class="C-button-column_1">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div class="C-column_2"></div>
                <div class="C-column_3">
                    <div class="C-column-title">
                        <p class="C-sub_title">Contact us</p>
                        <div class="C-child-box-subtitle_1"></div>
                    </div>

                    <div>
                        <div class="C-sub-column_3">
                            <label>Need assistance or have questions? Don't hesitate to get in touch with us. ShineAura's
                                customer care team is available 24/7 to assist you. Let us know how we can help. We're here to listen and ensure you have the best shopping experience on <b>ShineAura</b>.
                            </label>
                        </div>

                        <div class="C-sub-column_3">
                            <div class="C-store-information">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <label>thisisouremail@gmail.com</label>
                            </div>
                            <div class="C-store-information">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                <label>(000) 000 0000</label>
                            </div>
                            <div class="C-store-information">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                </svg>
                                <label>Street Address #000, City, State, Zip ######</label>
                            </div>
                        </div>
                        <div class="C-sub-column_3">
                            <div>
                                <label>Contact our medias:</label>
                            </div>
                            <div class="C-contact-information">
                                <button> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-twitter-x" viewBox="0 0 16 16">
                                        <path
                                            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                                    </svg></button>
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                        class="bi bi-instagram" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                    </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="C-container_2">
            <div class="C-container_title_2">
                <p class="C-FAQ_1">FAQ</p>
                <p class="C-FAQ_2">Frequently Asked Questions</p>
            </div>
            <div class="C-sub-container_2">
                <div class="C-column-title">
                    <img class="C-img" alt="" src={Logo} />
                    <div class="C-child-box-subtitle_2"></div>
                </div>
                <div>
                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label>What are the ingredients in your products?</label>
                        </button>
                        <div class="C-container-FAQ_1">
                            <label for="">We highly value transparency and your well-being. Delve into our product
                                descriptions, where we disclose every ingredient used. We are committed to ensuring that you
                                make informed choices by providing comprehensive details about the composition of each
                                product.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_3"></div>
                    </div>

                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label>Are your products cruelty-free and vegan?</label>
                        </button>
                        <div class="C-container-FAQ_2">
                            <label>Our commitment extends beyond quality skincare. We take pride in our ethical
                                stance: our products are cruelty-free and entirely vegan. We've ensured that no
                                animal-derived ingredients find their way into our formulations. Feel assured about the
                                ethical integrity of our brand.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_3"></div>
                    </div>
                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label>Do you offer any samples or trial sizes?</label>
                        </button>
                        <div class="C-container-FAQ_3">
                            <label for="">Discover our products firsthand with trial-sized samples or miniature versions
                                available for purchase. We understand the importance of experiencing a product before making
                                a significant commitment. Dip your toes into our range with our convenient trial-sized
                                options.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_3"></div>
                    </div>
                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label for="">How do I return or exchange an item?</label>
                        </button>
                        <div class="C-container-FAQ_4">
                            <label for="">We prioritize your satisfaction with our hassle-free return or exchange process.
                                Visit our Returns page, where you'll find easy steps to initiate a return or exchange. We
                                strive to ensure that your shopping experience remains stress-free.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_3"></div>
                    </div>
                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label for="">What are your shipping rates and policies?</label>
                        </button>
                        <div class="C-container-FAQ_5">
                            <label for="">We provide detailed insights into our shipping procedures, rates, and policies.
                                Our Shipping Policy page houses comprehensive information on shipping rates, estimated
                                delivery times, and other essential shipping terms. Discover our commitment to seamless
                                delivery.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_3"></div>
                    </div>
                    <div class="C-sub-button_2">
                        <button class="C-button-FAQ_6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                            </svg>
                            <label for="">Which product is right for my skin type?</label>
                        </button>
                        <div class="C-container-FAQ_6">
                            <label for="">Choosing the perfect skincare product tailored to your skin type is vital. Explore
                                our product range, each detailed with specific benefits catered to various skin types. For
                                personalized guidance, reach out to us or refer to our 'Suitable Skin Types' page.
                            </label>
                        </div>
                        <div class="C-child-box-subtitle_last"></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    );
}

export default Contactpage;

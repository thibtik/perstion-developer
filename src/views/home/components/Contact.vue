<template>
    <div class="container">
        <div class="section-title text-center">
            <span>CONTACT</span>
            <h1 class="fw-bold">Contact With Me</h1>
        </div>
    <div class="row">
            <div class="col-lg-5 col-md-12">
                <div class="contact-info rounded">
                    <div class="image rounded">
                        <img class="rounded" src="https://inbio-react.netlify.app/static/5930a183f9be0c913e9d25b1318416f9/3a710/contact1.webp" alt="">
                    </div>
                    <div class="title-area">
                        <h4 class="title">Nevine Acotanza</h4>
                        <span>Chief Operating Officer</span>
                    </div>
                    <div class="description">
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <span>Phone: +01234567890</span><br>
                        <span>Email: admin@example.com</span>
                    </div>
                    <div class="social-area">
                        <div>FIND WITH ME</div>
                        <ul>
                            <li><a href="https://facebook.com">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-12">
                <div class="contact-form rounded">
                    <form class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input class=" form-control form-control-lg" name="name" id="name" type="text">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input class="form-control form-control-lg" name="phone" id="phone" type="text">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input class="form-control form-control-lg" name="email" id="email" type="email">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="subject">subject</label>
                                <input class="form-control form-control-lg" name="subject" id="subject" type="text">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea class="form-control" name="message" id="message" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <button class="send-btn" type="submit">
                                <span><span>SEND MESSAGE</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
    </div>
</template>

<style lang="scss">
    @import '../../../assets/scss/pages/home/contact.scss';
</style>
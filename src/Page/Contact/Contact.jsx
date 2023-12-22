


const Contact = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-5 underline">Contact US</h2>
            <div>
                <div className="my-10 flex justify-center ">
                        <form >
                            <div className="md:flex  gap-10">
                                <div>
                                    <label className="form-control ">

                                        <input type="text" placeholder="Name*" name="name" required className="input input-bordered md:w-96 w-full rounded-full" />

                                    </label>
                                </div>
                                <div className="mt-3 md:mt-0">
                                    <label className="form-control">

                                        <input type="text" placeholder="Email*" name="email" required className="input input-bordered w-full md:w-96 rounded-full" />

                                    </label>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="form-control">

                                    <input type="text" placeholder="Subject*" name="subject" required className="input input-bordered w-full md:w-[810px] rounded-full" />

                                </label>
                            </div>
                            <div className="mt-3">
                                <label className="form-control">

                                    <textarea className="textarea textarea-bordered h-24 md:w-[810px] rounded-full" placeholder="Message*" name="message"></textarea>

                                </label>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline btn-accent rounded-full">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    );
};

export default Contact;
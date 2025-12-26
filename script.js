function bookNow() {
    const phoneNumber = "8801847761970"; // country code + number

    const message = encodeURIComponent(
        "Hi, I want to know more about your bridal makeup services."
    );

    window.open(
        "https://wa.me/" + phoneNumber + "?text=" + message,
        "_blank"
    );
}

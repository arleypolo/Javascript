const validateAge = () => {
    let fullName = document.getElementById("name").value
    let Age = document.getElementById("age").value

    if (Age < 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a correct value",
        });
    } else {
        if (Age < 18) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You are a minor Keep learning and enjoying the code!",
            });
        } else {
            if (Age > 18) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Welcome ${fullName} you are of legal age. Get ready for great opportunities in the world of programming!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
}

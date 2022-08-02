const karnivora = document.getElementById("alert-download-karnivora");
const herbivora = document.getElementById("alert-download-herbivora");
const omnivora = document.getElementById("alert-download-omnivora");
const hewan = document.getElementById("alert-download-hewan");

hewan.addEventListener("click", functionAlert);
karnivora.addEventListener("click", functionAlert);
herbivora.addEventListener("click", functionAlert);
omnivora.addEventListener("click", functionAlert);

function functionAlert() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  
    Toast.fire({
      icon: "success",
      title: "Download Marker Berhasil",
    });
  }
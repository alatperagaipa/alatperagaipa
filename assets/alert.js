const all = document.getElementById("alert-download-all");
const merkurius = document.getElementById("alert-download-merkurius");
const venus = document.getElementById("alert-download-venus");
const bumi = document.getElementById("alert-download-bumi");
const mars = document.getElementById("alert-download-mars");
const jupiter = document.getElementById("alert-download-jupiter");
const saturnus = document.getElementById("alert-download-saturnus");
const neptunus = document.getElementById("alert-download-neptunus");
const uranus = document.getElementById("alert-download-uranus");



all.addEventListener("click", functionAlert);
merkurius.addEventListener("click", functionAlert);
venus.addEventListener("click", functionAlert);
bumi.addEventListener("click", functionAlert);
mars.addEventListener("click", functionAlert);
jupiter.addEventListener("click", functionAlert);
saturnus.addEventListener("click", functionAlert);
neptunus.addEventListener("click", functionAlert);
uranus.addEventListener("click", functionAlert);

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

function swalAlert(icon, text, title = "Oops!") {
  Swal.fire({
    icon,
    title,
    text,
    heightAuto: false,
  });
}

function showLoading() {
  Swal.fire({
    footer: "<b>Loading Data</b>",
    showConfirmButton: false,
    heightAuto: false,
    html: `
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: 6vh"
    >
      <div
        class="spinner-border text-primary"
        style="width: 2rem; height: 2rem"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
  </div>
    `,
  });
}

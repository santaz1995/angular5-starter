export function handleBackendErrors(form, errors) {
  for (const error in errors) {
    if (errors.hasOwnProperty(error)) {
      form.controls[error].setErrors({backendError: errors[error][0]});
    }
  }
}

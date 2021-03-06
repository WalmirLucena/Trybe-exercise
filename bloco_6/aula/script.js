new window.JustValidate('.your-form', {
    Rules: {
      email: {
          required: true,
          email: true
      },
      checkbox: {
          required: true
      },
      name: {
          required: true,
          minLength: 3,
          maxLength: 15
      },
      text: {
          required: true,
          maxLength: 300,
          minLength: 5
      },
      password: {
          required: true,
          password: true,
          minLength: 4,
          maxLength: 8
      },
      zip: {
          required: true,
          zip: true
      },
      phone: {
          phone: true
      }
  }
});
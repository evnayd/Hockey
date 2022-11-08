const accordions = document.querySelectorAll('.accordion')
    accordions.forEach((el) => {
      el.addEventListener('click', () => {
       if (el.classList.contains('accordion-opened')) {
          el.classList.remove('accordion-opened')
          return
        } else {
          el.classList.add('accordion-opened')
        }
      })
    })

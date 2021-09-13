

// spinner
// window.onload = () => {
//     setTimeout(() => {
//         document.querySelector(".body").classList.add("display");
//     },2800);
// };
// end of spinner

// pages
// document.querySelectorAll('.logo').forEach(logo => {
//     logo.addEventListener('click', () => {
//         document.querySelector('.front-page').style.display = 'block';
//         document.querySelector('.about-page').style.display = 'none';
//         document.querySelector('.team-page').style.display = 'none';
//         document.querySelector('.contact-page').style.display = 'none';
//     })
// })

// document.querySelectorAll('.home').forEach(home => {
//     home.addEventListener('click', () => {
//         document.querySelector('.front-page').style.display = 'block';
//         document.querySelector('.about-page').style.display = 'none';
//         document.querySelector('.team-page').style.display = 'none';
//         document.querySelector('.contact-page').style.display = 'none';
//     })
// })

// document.querySelectorAll('.about').forEach(about => {
//     about.addEventListener('click', () => {
//         document.querySelector('.front-page').style.display = 'none';
//         document.querySelector('.about-page').style.display = 'block';
//         document.querySelector('.team-page').style.display = 'none';
//         document.querySelector('.contact-page').style.display = 'none';
//     })
// })

// document.querySelectorAll('.team').forEach(team => {
//     team.addEventListener('click', () => {
//         document.querySelector('.front-page').style.display = 'none';
//         document.querySelector('.about-page').style.display = 'none';
//         document.querySelector('.team-page').style.display = 'block';
//         document.querySelector('.contact-page').style.display = 'none';
//     })
// })

// document.querySelectorAll('.contact').forEach(contact => {
//     contact.addEventListener('click', () => {
//         document.querySelector('.front-page').style.display = 'none';
//         document.querySelector('.about-page').style.display = 'none';
//         document.querySelector('.team-page').style.display = 'none';
//         document.querySelector('.contact-page').style.display = 'block';
//     })
// })
// // end of pages

// hamburger 
document.querySelectorAll('.hamburger-menu').forEach(hamburger => {
    hamburger.addEventListener('click', () => {
        document.querySelectorAll('.container').forEach(contain => {
            contain.classList.toggle("change");
        });
        // document.querySelectorAll('.contact-info-wrapper').forEach(contain => {
        //     contain.classList.toggle("change");
        // });
    });
});
// end of hamburger

// navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if(window.innerWidth < 1000){
    const menuIcon = document.querySelectorAll('.sidebar-menu')
    const navbar = document.querySelectorAll('.navbar')

    menuIcon.addEventListener('click', () => {
            navbar.forEach(navbar => {
                navbar.classList.toggle('change');
            })
    })
    
    
    

        if(!navbar.classList.contains('change')){
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            });
        }
    

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headinglink => {
        headinglink.addEventListener('click', () => {
            headinglink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else{
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar-wrapper').style.background = 'none'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}

window.addEventListener('resize', () => {
    window.location.reload()
})
// end of navigation

// post page left sub topic  
document.querySelectorAll('.st-menu').forEach(stMenu => {
    stMenu.addEventListener('click', () => {
        document.querySelectorAll('.container').forEach(postS => {
            postS.classList.toggle("slide");
        });
    });
});

// document.querySelector('.st-menu').addEventListener('click', () => {
//     document.querySelector('.container').classList.toggle("slide");
// });
// end of post page left sub topic

// team story
document.querySelectorAll('.story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    })
})
// end of team story

// Scroll button
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });

// end of Scroll button

// post left sub-topic bar

// end of post left sub-topic bar
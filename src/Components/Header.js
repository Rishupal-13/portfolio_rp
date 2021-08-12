import React from 'react'
import {useWindowSize} from 'react-use';
import { Navbar, Nav, Container } from 'react-bootstrap';
function Header() {
    const windowSize = useWindowSize();
    return (
        <div>
           {windowSize.width>769 && 
            <header id="header">
                <div class="d-flex flex-column">
                
                   <div class="profile">
                       <h1 class="text-light">
                           <a href="index.html">
                             Rishu Pal
                           </a>
                       </h1>
                       <div class="social-links mt-3 text-center" >
                        <a href="https://github.com/Rishupal-13" class="twitter " style={{backgroundColor:"red"}}><i class="bx bxl-github" ></i></a>
                        <a href="https://www.instagram.com/rishuuuuuuu_13/" class="instagram" style={{backgroundColor:"red"}}><i class="bx bxl-instagram"></i></a>
                        <a href="rishupal202@gmail.com" class="google-plus" style={{backgroundColor:"red"}}><i class="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/rishu-pal-b251351a0/" class="linkedin" style={{backgroundColor:"red"}}><i class="bx bxl-linkedin"></i></a>
                       </div>
                    </div>

                    <nav id="navbar" class="nav-menu navbar">
                      <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#domains" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Domains</span></a></li>
                        <li><a href="#projects" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Projects</span></a></li>
                        <li><a href="#experience" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Experience</span></a></li>
                        <li><a href="#certificates" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Cetificates</span></a></li>
                        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Resume</span></a></li>
                        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                      </ul>
                     </nav>
                </div>
            </header>
           } 
       {windowSize.width<=769 && (

       <div>
       <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'> 
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id=' responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='#about'>About</Nav.Link>
                    <Nav.Link href='#domains'>Domains</Nav.Link>
                    <Nav.Link href='#projects'>Projects</Nav.Link>
                    <Nav.Link href='#experience'>Experience</Nav.Link>
                    <Nav.Link href='#certificates'>Certificates </Nav.Link>
                    <Nav.Link href='#resume'>Resume </Nav.Link>
                    <Nav.Link href='#contact'>Contact </Nav.Link>
                  
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
       </div>
       )}

        </div>
  )
}

export default Header


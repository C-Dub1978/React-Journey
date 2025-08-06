import logo from '../assets/logo.png';
import classes from './Header.module.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/** Inline styles work like the following: double curly braces, with key/value pairs for your css*/}
      <p className={classes.test}>A community of artists and art-lovers.</p>
    </header>
  );
}

/**
 * To scope css directly to components, what you can do is create a {cssName}.module.css file
 * 
 * add all your rules and such to it as normal
 * Inside your component, you would at the top of the file do a 'import classes from './cssName.module.css'
 * 
 * Then inside your component, you can do something like
 * <h1 className={classes.className}>
 * 
 * See above in this component ^^
 */
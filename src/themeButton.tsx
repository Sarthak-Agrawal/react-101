import React from 'react';
import { Button } from "react-bootstrap";
import { ThemeContext } from "./themeContext";

// function DarkThemeButton(props: {
//     changeTheme: (event: React.MouseEvent) => void
// }) {
//     return (
//         <Button onClick={props.changeTheme}>
//             Switch to Dark Theme
//         </Button>
//     )
// }

// function LightThemeButton(props: {
//     changeTheme: (event: React.MouseEvent) => void
// }) {
//     return (
//         <Button onClick={props.changeTheme}>
//             Switch to Light Theme
//         </Button>
//     )
// }

// export default function ThemeButton() {
//     const [theme, setTheme] = useState('light')

//     function handleClick() {
//         (theme==='light')? setTheme('dark'): setTheme('light')
//     }

//     function showButton() {
//         if(theme==='light') {
//             return <DarkThemeButton changeTheme={handleClick} />
//         } else {
//             return  <LightThemeButton changeTheme={handleClick} />
//         }
//     }

//     return(
//         {showButton}
//     )
// }

export default function ThemeSelector() {

    

    return(
        <ThemeContext.Consumer>
            {
                ({theme, toggleTheme, buttonLabel}) => (
                    <Button onClick={() => toggleTheme(theme)}>
                        {buttonLabel}
                    </Button>
                )
            }
        </ThemeContext.Consumer>
    )
}
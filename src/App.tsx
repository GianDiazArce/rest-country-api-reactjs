import { CustomThemeProvider } from './context/ThemeContext';
import { MainRouter } from './router/Router';

const App = () => {
  return (
    <CustomThemeProvider>
      <MainRouter />
    </CustomThemeProvider>
  )
}

export default App

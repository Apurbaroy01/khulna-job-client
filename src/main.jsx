import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  Navigate,
  RouterProvider,
} from "react-router-dom";
import router from './Router';
import BackroundColor from './Components/BacroundColor/BackroundColor';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BackroundColor>
      <RouterProvider router={router} />
    </BackroundColor>
  </StrictMode>,
)

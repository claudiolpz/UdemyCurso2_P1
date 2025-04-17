import { Link } from "react-router";
import dayjs from "dayjs";
import { useState } from "react";
import "dayjs/locale/es";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button, Stack, TextField } from "@mui/material";

dayjs.locale("es");

const MaterialDatePicker = () => {
  const [fecha1, setFecha1] = useState(null); // Inicializado como null
  const [hora1, setHora1] = useState(null); // Inicializado como null

  const handleFormulario = (e) => {
    e.preventDefault();
    if (fecha1 && hora1) {
      alert(
        `Fecha: ${dayjs(fecha1).format("DD/MM/YYYY")} | Hora: ${dayjs(hora1).format("H:mm")}`
      );
    } else {
      alert("Por favor selecciona una fecha y hora válidas.");
    }
  };

  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to="/material"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Material
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Date Picker
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="text-center mb-2">Date Picker </h1>
      <hr className="mb-4" />
      <form onSubmit={handleFormulario}>
        <Stack spacing={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Fecha 1"
              inputFormat="DD/MM/YYYY"
              value={fecha1}
              onChange={(newValue) => setFecha1(newValue)} // Asegura que sea una instancia válida de dayjs
              TextField={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Hora 1"
              value={hora1}
              onChange={(newValue) => setHora1(newValue)} // Asegura que sea una instancia válida de dayjs
              TextField={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default MaterialDatePicker;
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function App() {
  const [kpi, setKpi] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/kpis")
      .then((res) => res.json())
      .then((data) => {
        
        if (data && data.length > 0) {
          setKpi(data[0]); 
        } else {
          setKpi(data); 
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error cargando la auditoría:", error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-lg animate-pulse">Consultando base de datos de SoftTech Solutions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white font-sans">
 
      <header className="mb-8 border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-bold tracking-tight text-indigo-400">SoftTech Solutions</h1>
        <p className="text-slate-400 mt-1">Panel Gerencial de Auditoría — Monitoreo de KPIs en Tiempo Real (XAMPP)</p>
      </header>

  
      <div className="grid gap-6 md:grid-cols-3">
        
      
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-400">Satisfacción del Cliente</CardTitle>
            <CardDescription className="text-xs text-indigo-300">Métrica CMMI de calidad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-emerald-400">{kpi?.satisfaccion || "N/A"}</div>
            <p className="text-xs text-slate-500 mt-2">Dato recuperado de phpMyAdmin.</p>
          </CardContent>
        </Card>


        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-400">Tiempo de Respuesta</CardTitle>
            <CardDescription className="text-xs text-indigo-300">Resolución de tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-sky-400">{kpi?.tiempoRespuesta || "N/A"}</div>
            <p className="text-xs text-slate-500 mt-2">Eficiencia del personal técnico.</p>
          </CardContent>
        </Card>

 
        <Card className="bg-slate-900 border-slate-800 text-white">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-400">Llamadas Colgadas</CardTitle>
            <CardDescription className="text-xs text-indigo-300">Tasa de abandono crítico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-rose-400">{kpi?.llamadasColgadas || "N/A"}</div>
            <p className="text-xs text-slate-500 mt-2">Tolerancia máxima establecida: 5%.</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

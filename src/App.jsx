import { useState } from "react";
import './App.css';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

function App() {

    const [expense, setExpense] = useState([]);
    const [newExpense, setNewExpense] = useState("");

    const [month, setMonth] = useState([]);
    const [newMonth, newSetMonth] = useState("");

    function handleAddExpense(){
      setExpense(expense => [...expense, newExpense]);
      setNewExpense("");
      setMonth(month => [...month, newMonth]);
      newSetMonth("");
    }



  const chartConfig = {
    type: "line",
    height: 240,
    series: [
      {
        name: "Sales",
        data: expense,
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: month,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };

  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="flex flex-col justify-center items-center content-center">
        <h1 className="font-sans text-black text-5xl font-bold mt-[100px] animate-slide-up mb-10 drop-shadow-2xl">Expense App</h1>
<div className="mb-10 flex justify-between gap-4 animate-slide-up">


        <input type="number" placeholder="Enter Expense Total" className="border-black border-1 max-w-max content-center justify-center text-center" value={newExpense}   onChange={(e) => setNewExpense(e.target.value)}></input>
        <input type="text" placeholder="Enter Expense Total of the Month" className="border-black border-1 max-w-max" value={newMonth} onChange={(e) => newSetMonth(e.target.value)}></input>
        <button className="bg-black text-white py-2 px-4 rounded-md text-bold" onClick={handleAddExpense}>Button</button>

</div>


        <Card className="w-full max-w-md  drop-shadow-2xl animate-slide-ups">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
          ></CardHeader>
          <CardBody className="px-5 pb-0 pt-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default App;

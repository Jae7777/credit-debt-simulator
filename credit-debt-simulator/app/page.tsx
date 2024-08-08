import Image from "next/image";
import { Button } from "@/components/ui/button"
import InputForm from "@/components/InputForm";
import OutputField from "@/components/output/OutputField";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     college loan simulator
      <InputForm />
      <OutputField 
        futureCombinedCollegeExpense={0}
        presentCombinedCollegeExpense={0}
        presentAmountNeedToSave={0}
        presentAmountNeedToSavePerMonth={0}
      />
    </main>
  );
}

export default  function Steps() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full  max-w-3xl flex-row items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Step step ="Step 1"  description ="Upload Your Document."/>
        <Step step = "Step 2" description = "You can Ask your Qustions."/>
    
      </main>
    </div>
  );
}


export function Step(props) {
    return (
        <div className="mb-8 mx-2 border-t-4 border-blue-200 pb-6 dark:border-blue-700 w-full">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200 mb-2">{props.step}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">{props.description}</p>
        </div>
    );
}
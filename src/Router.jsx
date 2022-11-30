import { Route, Routes } from "react-router-dom";
import { BetterCallSaul } from "./pages/BetterCallSaul";
import { BrakingBad } from "./pages/BreakingBad";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bb" element={<BrakingBad />} />
            <Route path="bcs" element={<BetterCallSaul />} />
        </Routes>
    )
}
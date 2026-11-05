import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useLayoutEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Selling from "./pages/Selling";
import SellingTutorial from "./pages/SellingTutorial";
import Buying from "./pages/Buying";
import BuyingTutorial from "./pages/BuyingTutorial";
import Listings from "./pages/Listings";
import OnlineNDA from "./pages/OnlineNDA";
import BecomeBroker from "./pages/BecomeBroker";

function Router() {
  const [location] = useLocation();

  // Wouter uses client-side navigation, so reset retained scroll position on every new page.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sell" component={Sell} />
      <Route path="/no-cost-valuation" component={Sell} />
      <Route path="/selling" component={Selling} />
      <Route path="/selling-tutorial" component={SellingTutorial} />
      <Route path="/buy" component={Buying} />
      <Route path="/buying-tutorial" component={BuyingTutorial} />
      <Route path="/listings" component={Listings} />
      <Route path="/online-nda" component={OnlineNDA} />
      <Route path="/become-a-broker" component={BecomeBroker} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

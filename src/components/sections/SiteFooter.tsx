import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const SiteFooter = () => {
  return <footer className="border-t border-secondary/40 mt-20">
      
      <div className="container pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} PHLOX. All rights reserved.
      </div>
    </footer>;
};
export default SiteFooter;
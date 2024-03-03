import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinnerVariants = cva(
    'text-muted-foreground animate-spin',
    {
        variants: {
            size: {
                default: "h-4 w-4",
                small: "h-2 w-2",
                large: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            size: "default",
        }
    }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}
// VariantProps return something like:
//
// {
//     size: string;
// }
const Spinner = ({
    size
}: SpinnerProps) => {
    console.log(size)
    return (<Loader 
        className={cn(spinnerVariants({size}))}
    /> );
}
 
export default Spinner;
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  tokenType: z.string().min(1, "Token type is required"),
  network: z.string().min(1, "Network is required"),
  tokenName: z.string().min(1, "Token name is required"),
  tokenSymbol: z.string().min(1, "Token symbol is required"),
  tokenDecimals: z.number().int().min(0).max(18),
  initialSupply: z.string().min(1, "Initial supply is required"),
  maxSupply: z.string().min(1, "Max supply is required"),
  burnable: z.boolean().default(false),
  mintable: z.boolean().default(false),
  deflationary: z.boolean().default(false),
  taxable: z.boolean().default(false),
  supplyType: z.string(),
  accessType: z.string(),
  verifiedSourceCode: z.boolean().default(false),
  termsAccepted: z.boolean().default(false),
});

export const TOKENDETAILFORM = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenDecimals: 18,
      initialSupply: "1000",
      maxSupply: "1000",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Token Details</h2>
      <p className="text-sm text-muted-foreground mb-6">
        Enter token details and choose a network
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="tokenType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Token type <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="HelloKRC20" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="HelloKRC20">HelloKRC20</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Choose a Token Type.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tokenName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Token name <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g My Token" {...field} />
                    </FormControl>
                    <FormDescription>
                      A custom name for the token.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tokenSymbol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Token Symbol <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="e.g MTT" {...field} />
                    </FormControl>
                    <FormDescription>
                      A custom symbol for the token (usually 3-5 chars).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tokenDecimals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token decimals</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="bg-muted"
                        {...field}
                        disabled
                      />
                    </FormControl>
                    <FormDescription>
                      The decimal precision for the token (usually 18).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="initialSupply"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Initial Supply <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      The initial number of available tokens that will be
                      created in your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="maxSupply"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Max Supply <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      The maximum number of tokens available.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Middle Column */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="network"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Network/Work <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a network" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="network1">Network 1</SelectItem>
                        <SelectItem value="network2">Network 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Choose a network.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Features</h3>

                <FormField
                  control={form.control}
                  name="burnable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Burnable</FormLabel>
                        <FormDescription className="mt-1 text-sm text-gray-600">
                          The Token can be manually burned to reduce circulating
                          supply.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mintable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            checked={field.value}
                            onChange={field.onChange}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Mintable</FormLabel>
                        <FormDescription className="mt-1 text-sm text-gray-600">
                          Owner or accounts with minting permission will be able
                          to generate new tokens, up to the max supply, by
                          minting them.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mintable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            checked={field.value}
                            onChange={field.onChange}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Deflationary</FormLabel>
                        <FormDescription className="mt-1 text-sm text-gray-600">
                          Token supply will reduce over time. For each
                          transaction a fee will be automatically burned. Owner
                          can exclude some accounts from the deflation
                          mechanism.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mintable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            checked={field.value}
                            onChange={field.onChange}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Taxable</FormLabel>
                        <FormDescription className="mt-1 text-sm text-gray-600">
                          A tax fee will be added to transfers. For each
                          transaction a fee will be automatically sent to a
                          predefined address. Owner can exclude some accounts
                          from the taxation mechanism.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="supplyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supply Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-muted">
                          <SelectValue placeholder="10k" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10k">10k</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      10k, Fixed, Unlimited, Capped
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="accessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Access Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-muted">
                          <SelectValue placeholder="None" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>None, Ownable, Role Based</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

<FormField
                  control={form.control}
                  name="mintable"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            checked={field.value}
                            onChange={field.onChange}
                            className="sr-only peer"
                          />
                          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none dark: rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                        </label>
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Verified Source Code</FormLabel>
                        <FormDescription className="mt-1 text-sm text-gray-600">
                        Token Source Code will be automatically verified on Etherscan. Only available on Mainnet.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />

              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="space-y-1 leading-none">
                        <FormLabel>Terms of Use</FormLabel>
                        <FormDescription>
                          I have read, understood and agreed to Token
                          Generator's Terms of Use
                        </FormDescription>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      NEXT
                    </Button>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* <Button type="submit" className="w-full">
            NEXT
          </Button> */}
        </form>
      </Form>
    </div>
  );
};
export default TOKENDETAILFORM;

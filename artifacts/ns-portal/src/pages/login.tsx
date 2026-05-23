import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Lock, AlertCircle, Info, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MainLayout } from "@/components/layout/gov-layout";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const loginSchema = z.object({
  nric: z.string()
    .regex(/^[STFG]\d{7}[A-Z]$/i, "Invalid NRIC format. Must be S/T/F/G followed by 7 digits and a letter."),
  password: z.string().min(8, "Password must be at least 8 characters.")
});

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSingpassLoading, setIsSingpassLoading] = useState(false);
  const [isNricLoading, setIsNricLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      nric: "",
      password: "",
    },
  });

  const handleSingpassLogin = () => {
    setIsSingpassLoading(true);
    setTimeout(() => {
      setLocation("/dashboard");
    }, 1500);
  };

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setIsNricLoading(true);
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Welcome back, user ${values.nric.toUpperCase()}`,
      });
      setLocation("/dashboard");
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Log in to NS Portal
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Access your National Service e-Services safely
              </p>
            </div>

            <Card className="mt-8 border-gray-200 shadow-md">
              <CardHeader className="bg-white rounded-t-lg pb-6 border-b border-gray-100">
                <CardTitle className="text-lg font-semibold text-center">Select Login Method</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                
                <div className="space-y-4 mb-6">
                  <Button 
                    className="w-full h-14 text-base font-bold bg-[#C0272D] hover:bg-[#A02025] text-white flex items-center justify-center gap-2"
                    onClick={handleSingpassLogin}
                    disabled={isSingpassLoading || isNricLoading}
                    data-testid="button-singpass-login"
                  >
                    {isSingpassLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Logging in via Singpass...
                      </span>
                    ) : (
                      <>
                        Log in with Singpass
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </>
                    )}
                  </Button>
                  
                  <div className="text-xs text-center text-gray-500 font-medium">
                    Recommended for faster access
                  </div>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500 font-medium">Or log in with</span>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="nric"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>NRIC / FIN</FormLabel>
                          <FormControl>
                            <Input placeholder="S1234567A" {...field} className="h-11" disabled={isSingpassLoading || isNricLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex justify-between items-center">
                            Password
                            <a href="#" className="text-xs text-primary hover:underline font-medium">Forgot password?</a>
                          </FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} className="h-11" disabled={isSingpassLoading || isNricLoading} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="outline" 
                      className="w-full h-11 border-gray-300 font-medium"
                      disabled={isSingpassLoading || isNricLoading}
                      data-testid="button-nric-login"
                    >
                      {isNricLoading ? "Logging in..." : "Log In"}
                    </Button>
                  </form>
                </Form>

              </CardContent>
            </Card>
            
            <Alert className="mt-6 bg-[#F8F9FA] border-gray-200">
              <Lock className="h-4 w-4 text-gray-600" />
              <AlertTitle className="text-gray-800 text-sm font-semibold">Official Government Website</AlertTitle>
              <AlertDescription className="text-xs text-gray-600 mt-1">
                This is a secure connection. We will never ask for your Singpass password or 2FA details via email or SMS.
              </AlertDescription>
            </Alert>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 border-b border-gray-200 pb-2">Announcements</h3>
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm flex gap-3 items-start">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Scheduled Maintenance</p>
                  <p className="text-xs text-gray-600 mt-1">e-Services will be unavailable on Sunday, 15 Oct from 0200hrs to 0600hrs for scheduled system maintenance.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}

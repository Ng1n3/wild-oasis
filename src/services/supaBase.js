import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rnuuvrwzgaawrkgaymyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJudXV2cnd6Z2Fhd3JrZ2F5bXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2OTUyOTgsImV4cCI6MjAzMDI3MTI5OH0.rBE7pXAxdR9oFWYFj-voc6P9PzzdDZNNBtjvTBnCGg4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

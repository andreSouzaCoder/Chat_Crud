import {createClient} from '@supabase/supabase-js';

const supabaseURL = 'https://bkbvcimjzjlukkuxroem.supabase.com'; //Substituir pelo endereço do seu banco de dados do Supabase

const supabaseAnonkey = 'eyJhbGciOiJIUzl1NilslnR5cCl6lkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIslnJlZil6lmJrYnzjaW1qempsdWtrdXhyb2Vtliwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMTU4OTcslmV4cCl6MjA4oTU5MTg5N30.AAh5hiQXTX557EqAii99df0dRE_uV-56zc84watFAdl'; //Substituir pela chave anônima do seu banco Supabase

export const supabase = createClient(supabaseURL, supabaseAnonkey);



import System.IO
import System.Environment

main = do
  hello <- getArgs
  if null hello
    then return ()
  else do
    putStrLn $ reverse $ concat hello

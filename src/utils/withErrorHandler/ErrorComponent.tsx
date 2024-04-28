import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, Button, Container, Paper } from "@mui/material";
import { HiRefresh } from "react-icons/hi";
import { FallbackProps } from "react-error-boundary";
import { lazy, useEffect } from "react";
import { useAppSelector } from "utils/hooks/redux";
import { selectMode } from "setting/slices/userPreferencesSlice";

const LightErrorVector = lazy(
  () => import("assets/images/dark-error-vector.svg?react")
);
const DarkErrorVector = lazy(
  () => import("assets/images/error-vector.svg?react")
);

function ErrorComponent({ resetErrorBoundary, error }: FallbackProps) {
  const mode = useAppSelector(selectMode);

  useEffect(() => {
    if (import.meta.env.DEV) console.error(error);
  }, [error]);

  return (
    <Container
      disableGutters
      maxWidth="md"
      className="relative top-[50%] translate-y-[-50%]"
    >
      <Paper className="p-80">
        <div className="flex flex-col px-16 h-full w-full justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
          >
            <Box className="flex justify-center mb-20">
              {mode === "light" ? <LightErrorVector /> : <DarkErrorVector />}
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            <Typography
              variant="h5"
              className="!mt-12 text-center"
              color="text.primary"
            >
              خطایی از سمت ما رخ داده است
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          >
            <Typography
              variant="h5"
              className="!mt-8 text-center"
              color="text.secondary"
            >
              با تشکر از صبوری شما، مشکل پیش آمده به زودی رفع خواهد شد.
            </Typography>
          </motion.div>

          <Button
            className="!mt-48 w-fit !mx-auto"
            onClick={resetErrorBoundary}
            endIcon={<HiRefresh />}
          >
            تلاش مجدد
          </Button>
        </div>
      </Paper>
    </Container>
  );
}

export default ErrorComponent;

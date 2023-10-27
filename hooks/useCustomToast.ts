import {useToast} from '@chakra-ui/react';

const useCustomToast = () => {
  const toast = useToast();

  return {
    info: (title: string, description?: string) => {
      toast({
        title,
        description,
        status: "info",
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    },

    success: (title: string, description?: string) => {
      toast({
        title,
        description,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    },

    error: (title: string, description?: string) => {
      toast({
        title,
        description,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: 'bottom-right',
      });
    },
  };
};

export default useCustomToast;
import Swal from 'sweetalert2';

export const coloredToast = (color: any,message:string) => {
	const toast = Swal.mixin({
		toast: true,
		position: 'bottom-start',
		showConfirmButton: false,
		timer: 3000,
		showCloseButton: true,
		customClass: {
			popup: `color-${color}`,
		},
	});
	toast.fire({
		title: message,
	});
};
deployment
-- try npm postinstall scripts for dep
-- seed on install?

plan out component structure

form should receive handleSubmit, schools, and handleCancel
make api request in form submission, not thunk
check for errors, if errors, set state, else dispatch new/updated student and redirect (use withRouter to get history)

edit student modal w/ route in /students (/students/edit/:id)
add student page
student cards height issue

redux actions for start, succeed, fail: https://daveceddia.com/where-fetch-data-redux/
think memoize filtering
make utils functions efficient


<idpassword>

<script>
    this.mixin(new (require('./IdPasswordCode.ts')).default());
</script>


<div>

{ JSON.stringify(myState) }

<input name='id'/>
<input name='password'/>
<input type='button' onEnter={ login } onClick={ login } value="Login"/>
<div>
{ myState.hasError }
</div>
</idpassword>



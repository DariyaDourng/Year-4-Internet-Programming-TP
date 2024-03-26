<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;

class Promotion extends Component
{
    public $promotion;
    /**
     * Create a new component instance.
     */
    public function __construct($promotion)
    {
        //
        $this->promotion = $promotion;
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.promotion');
    }
}